const api_url =
  "https://api.github.com/repos/MLH-Fellowship/pod-4.1.0-portfolio/pulls?state=closed";

/* 
Team Members List: (Based on Index number)
    Team 1 -> 0 - 3
    Team 2 -> 4 - 6
    Team 3 -> 7 - 10
    Team 4 -> 11 - 13
*/
var pod_members = [
  "HugoCL",
  "ManishaJhunjhunwala",
  "Naman-1234",
  "rudranshsharma123",
  "thedevyansh",
  "Nishtha0801",
  "yogi2103",
  "iamakkkhil",
  "AshAman999",
  "Apurva-tech",
  "Henokaa",
  "Manasvi070902",
  "Priyaraj17",
  "Raunakk02",
];

// Team Scores based on the PR commits
var team_scores = { Team_1: 0, Team_2: 0, Team_3: 0, Team_4: 0 };

// Defining async function
async function getapi(url) {
  // Storing response
  const response = await fetch(url);

  // Storing data in form of JSON
  var data = await response.json();
  renderData(data);
}

// Calling that async function
getapi(api_url);

// Function to get the PR commits per user from the data
// we received from API
function renderData(data) {
  var pr_count = {};
  pr_data = data;

  // iterating above all the available PRs.
  for (let i = 0; i < pr_data.length; i++) {
    //   Only accepting the PRs which are merged
    if (pr_data[i]["merged_at"] !== null) {
      // storing the no of PRs per user in a dictionary -> pr_count
      // console.log(pr_data[i]["user"]["login"])
      if (pr_count[pr_data[i]["user"]["login"]]) {
        pr_count[pr_data[i]["user"]["login"]] += 1;
      } else {
        pr_count[pr_data[i]["user"]["login"]] = 1;
      }
    }
  }
  updateTeamScores(pr_count);
}

// Function to update the team data
function updateTeamScores(pr_commits_map) {
  // Creating Team Score based on PRs of each member.
  for (var key in pr_commits_map) {
    username = key;
    prs_merged = pr_commits_map[key];

    for (let i = 0; i < pod_members.length; i++) {
      if (pod_members[i] === username) {
        if (i < 4) {
          team_scores["Team_1"] += prs_merged;
        } else if (i < 7) {
          team_scores["Team_2"] += prs_merged;
        } else if (i < 11) {
          team_scores["Team_3"] += prs_merged;
        } else if (i < 14) {
          team_scores["Team_4"] += prs_merged;
        }
      }
    }
  }

  //sorting team_scores according to the commits of the team
  var sortable = [];
  for (var team in team_scores) {
    sortable.push([team, team_scores[team]]);
  }
  sortable.sort(function (a, b) {
    return b[1] - a[1];
  });

  // passing the data to HTML
  show(sortable);
}

// Function to define innerHTML for HTML table
function show(team_scores) {
  let tab = `<thead>
                <tr>
                    <th>Rank</th>
                    <th>Teams</th>
                    <th>PRs Merged</th>
                </tr>
            </thead>`;

  // Loop to access all rows
  for (let i = 0; i < team_scores.length; i++) {
    tab += `<tbody>
                <tr> 
                    <td><strong>${i + 1}</strong></td>
                    <td>${team_scores[i][0]}</td> 
                    <td>${team_scores[i][1]}</td>          
                </tr>
            </tbody>`;
  }

  // Setting innerHTML as tab variable
  document.getElementById("leaderboard").innerHTML = tab;
}
