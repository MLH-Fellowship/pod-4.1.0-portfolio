from flask import Flask, request, jsonify, make_response
import requests
app = Flask(__name__)

@app.route('/')  # this is the home page route
def hello_world(
):  # this is the home page function that generates the page code
    return "Hello world!"

calendly_links = {
	"Aman Raj": "https://calendly.com/api/booking/event_types/EDNDO3GMWNZICGCD/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Hugo Castro":"https://calendly.com/api/booking/event_types/GFPCNYDJDGYDHYR6/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Manasvi Alimchandani":"https://calendly.com/api/booking/event_types/GGMHL7EPEQOB5YQ7/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Manisha Jhunjhunwala":"https://calendly.com/api/booking/event_types/FGOAKYBZAWEBOT3K/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Akhil Bhalerao":"https://calendly.com/api/booking/event_types/HANFJ7BEJFILSUEG/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Devyansh Chawla":"https://calendly.com/api/booking/event_types/AGPAKQ7H2IHW7V76/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Rudransh Sharma":"https://calendly.com/api/booking/event_types/AEIGJZEOXKSUMN7L/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Naman Kalra":"https://calendly.com/api/booking/event_types/FGPBP7DJFRRFSKIK/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Raunak Kumar":"https://calendly.com/api/booking/event_types/DBOGL7EF4PRQHY6T/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Priyaraj":"https://calendly.com/api/booking/event_types/BBNGP6DIWDBJF2BU/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",
	"Nishtha":"https://calendly.com/api/booking/event_types/CENFJ5BKBX2LMJRN/calendar/range?timezone=Asia%2FCalcutta&diagnostics=false&range_start=2021-10-08&range_end=2021-10-31",

}


github_handles = {
	"HugoCL":"Hugo Castro",
  "ManishaJhunjhunwala":"Manisha Jhunjhunwala",
  "Naman-1234":"Naman Kalra",
  "rudranshsharma123":"Rudransh Sharma",
  "thedevyansh":"Devyansh Chawla",
  "Nishtha0801":"Nishtha Goyal",
  "yogi2103":"Yogesh",
  "iamakkkhil":"Akhil Bhalerao",
  "AshAman999":"Aman Raj",
  "Apurva-tech":"Apurva Sharma",
  "Henokaa":"Henok",
  "Manasvi070902":"Manasvi Alimchandani",
  "Priyaraj17":"Priyaraj",
  "Raunakk02":"Raunak Kumar",
}

actual_calendly_links = {
	"Aman Raj": "https://calendly.com/amanraj/15min",
	"Hugo Castro":"https://calendly.com/hugocastrocl",
	"Manasvi Alimchandani":"https://calendly.com/manasvi-alimchandani",
	"Manisha Jhunjhunwala":"https://calendly.com/manishajhunjhunwala7",
	"Akhil Bhalerao":"https://calendly.com/akhilbhalerao/15min",
	"Devyansh Chawla":"https://calendly.com/devyansh",
	"Rudransh Sharma":"https://calendly.com/rudranshsharma123/15min",
	"Naman Kalra":"https://calendly.com/naman_k",
	"Raunak Kumar":"https://calendly.com/raunakk728",
	"Priyaraj":"https://calendly.com/priyaraj17/15min",
	"Nishtha":"https://calendly.com/nishthagoyal8/nishtha-goyal"
}

@app.route('/webhook', methods=['POST'])
def webhook():
	req = request.get_json(force=True, silent=True)
	query_res = req.get('queryResult')
	intent_name = req.get('queryResult').get("intent").get('displayName')
	if intent_name == "Meeting":
		url = calendly_links[query_res['parameters']['fellows']]
		return_arr = []
		r = requests.get(url)
		response = r.json()
		for i, v in enumerate(response['days']):
			if response['days'][i]['status'] == 'available':
				date = response['days'][i]['date']
				number_of_spots = len(response['days'][i]['spots'])
				time_start = response['days'][i]['spots'][0]['start_time'].split('T')[-1]
				time_end = response['days'][i]['spots'][-1]['start_time'].split('T')[-1]
				return_arr.append(f"{date} has available slots, and the number of available slots are {number_of_spots} from time {time_start} till time {time_end} \n")
			
		return_text = f"{query_res['parameters']['fellows']} is free on the slots as follows: \n"+"\n\n".join(return_arr) + '\n' + f"You can use this link to schedule a meeting with them {actual_calendly_links[query_res['parameters']['fellows']]}"
		
		return {
			"fulfillmentText": return_text, "source": "webhook"
		}
	if intent_name == "NumberOfCommits":
		closed, merged = 0, 0
		url = "https://api.github.com/repos/MLH-Fellowship/pod-4.1.0-portfolio/pulls?state=closed"
		github_handle = query_res['parameters']['githubhandles']
		r = requests.get(url)
		response = r.json()
		for i in response:
			if i['merged_at']!=None and i['user']['login'] == github_handle:
				merged+=1
			if i['merged_at']==None and i['user']['login'] == github_handle:
				closed +=1
		return_text = f'Number of PRs merged by {github_handles[github_handle]} are {merged} and the number of unmerged closed PRs are {closed}'
		return {
			"fulfillmentText": return_text, "source": "webhook"
		}






	
if __name__ == '__main__':
    app.run(host='0.0.0.0',
            port=8080) 
