# Portfolio Template
## This is a Jekyll website template designed for Prep Fellows.
[![Netlify Status](https://api.netlify.com/api/v1/badges/8984d1fb-7164-422a-b2e8-b4d193bb9b06/deploy-status)](https://app.netlify.com/sites/prep-pod-4-1-0/deploys)
## Repo Stats


[![GitHub code size in bytes](https://img.shields.io/github/languages/code-size/MLH-Fellowship/pod-4.1.0-portfolio?logo=github&style=for-the-badge)](https://github.com/MLH-Fellowship/pod-4.1.0-portfolio/) 
[![GitHub last commit](https://img.shields.io/github/last-commit/MLH-Fellowship/pod-4.1.0-portfolio?style=for-the-badge&logo=git)](https://github.com/MLH-Fellowship/pod-4.1.0-portfolio/) 
[![GitHub stars](https://img.shields.io/github/stars/MLH-Fellowship/pod-4.1.0-portfolio?style=for-the-badge)](https://github.com/MLH-Fellowship/pod-4.1.0-portfolio/stargazers)  
[![GitHub forks](https://img.shields.io/github/forks/MLH-Fellowship/pod-4.1.0-portfolio?style=for-the-badge&logo=git)](https://github.com/MLH-Fellowship/pod-4.1.0-portfolio/network)
[![Languages](https://img.shields.io/github/languages/count/MLH-Fellowship/pod-4.1.0-portfolio?style=for-the-badge)](https://github.com/MLH-Fellowship/pod-4.1.0-portfolio)
[![Issues](https://img.shields.io/github/issues/MLH-Fellowship/pod-4.1.0-portfolio?style=for-the-badge&label=Issues)](https://github.com/MLH-Fellowship/pod-4.1.0-portfolio)
[![Watchers](	https://img.shields.io/github/watchers/MLH-Fellowship/pod-4.1.0-portfolio?label=Watch&style=for-the-badge)](https://github.com/MLH-Fellowship/pod-4.1.0-portfolio/) 


# Make your own!

1. Use the Template button.
2. Update `_config.yml` to contain your information.
    1. Change `url` to the URL you'll be hosting it at
    2. Make sure it has the /
3. Use something like Netlify or GitHub Pages to deploy (note, this only works on username.github.io, not username.github.io/repo-name)

## Add your portfolio

Head to `_data` and fill out either `projects.yml`, `experience.yml` and `education.yml`.

Project example.
```yaml
- title: Online Shopping Application
  event: MLH Prep - Batch 4.5
  date: Fall 2021
```

Experience example.
```yaml
- role: MLH Prep Fellow
  company: MLH Fellowship
  dates: Summer 2021
  logo: fellowship.svg
```

Education example.
```yaml
- course: Prep Fellow
  institute: MLH Fellowship
  dates: Fall 2021
  logo: fellowship.svg
```
## Add project posts

1. Make a new `.md` file inside of `projects`.
2. Add the header to your markdown file (see below) and change the title to the name of your blog post.
3. Write your project page! Can be a README from GitHub or your Devpost page.
4. Add the `page-name` field to your `projects.yml` (see below).

Top of post markdown file post.
```
---
title: Project
layout: page
---
```

`projects.yml` with the `page-name` field.

```yaml
- title: Online Shopping Application
  event: MLH Prep - Batch 4.5
  date: Summer 2021
  page-name: project
```

## Features and Interfaces



## <h3 align="left">Languages and Tools:</h3>  
<p align="left"> <a href="https://git-scm.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://jekyllrb.com/" target="_blank"> <img src="https://www.vectorlogo.zone/logos/jekyllrb/jekyllrb-icon.svg" alt="jekyll" width="40" height="40"/> </a> <a href="https://www.ruby-lang.org/en/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/ruby/ruby-original.svg" alt="ruby" width="40" height="40"/> </a> <a href="https://sass-lang.com" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a> </p>


# Development Instructions

### MacOs 
<img src="https://img.icons8.com/color/48/000000/mac-logo.png"/>

Check if ruby is already installed
```
 ruby-v
```
You can check bundler with:
```
bundler-v
```
If you don't have ruby and bundler, you can install with:
```
 brew install ruby
 gem install bundler
```
Then run these commands to set up this project:
```
 bundle config set --local path 'vendor/bundle'
 bundle exec jekyll serve
```

## Arch Based Distrubutions 
## <a href="https://www.linux.org/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="linux" width="40" height="40"/> </a> 

Check if ruby is already installed by running 
```
ruby -v
```

If not, install it by running 
```
sudo pacman -S ruby
```

```
export GEM_HOME="$(ruby -e 'puts Gem.user_dir')"
export PATH="$PATH:$GEM_HOME/bin"

```

Then restart ypur device or run 
```
source ~/.profile
````

Install bundler by running 
```
gem install bundler
```

Change directory to project home and setup environment by running 
```
bundle install --path vendor/bundle
```

Finally start your local dev server 
```
bundle exec jekyll serve --livereload
```
## Windows
<img src="https://img.icons8.com/color/30/000000/windows-10.png"/>

Download the executable from the offical page of ruby and after that run these commands in the root directory of the project
```
bundle install --path vendor/bundle

bundle exec jekyll serve
 ```









# **If you have ruby and jekyll already installed then run these commands to run the server locally**

 
``` 
git clone https://github.com/MLH-Fellowship/pod-4.1.0-portfolio 

cd ./pod-4.1.0-portfolio

bundle install --path vendor/bundle

bundle exec jekyll serve
 ```
  



# Deployment

- [Deployed Website](prep-pod-4-1-0.netlify.app)


# Add Google Analytics

1. Create a Google account if you don't have one

2. Sign in to your [Analytics account](https://analytics.google.com/)

3. Click Admin

4. Select an account from the menu in the ACCOUNT column.

5. Select a property from the menu in the PROPERTY column.

6. Under PROPERTY, click Tracking Info -> Tracking Code. Your Tracking ID will be displayed at the top of the page

7. Inside _config.yml file, simply enter your tracking id under google-analytics field.

If you get stuck in any of these steps, refer [here](https://support.google.com/analytics/answer/1008080).

## Need help?

Feel free to ask in the  [Disussions](https://github.com/MLH-Fellowship/pod-4.1.0-portfolio) 



---------

```javascript

if (youEnjoyed) {
    starThisRepository();
}

```

-----------
