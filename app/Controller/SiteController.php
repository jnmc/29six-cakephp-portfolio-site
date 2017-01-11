<?php

class SiteController extends AppController {
	
	public $helpers = array('Html', 'Form', 'Js');
	
	public function index() {
		$this->autoRender = false;
		$this->set('title_for_layout','29SIX SITE');	
		$this->render('index');
	}
	
	public function cv() {
		$this->autoRender = false;
		$this->set('title_for_layout','29SIX SITE');	
		$this->render('cv');
	}
	
	public function skills() {
		$this->autoRender = false;
		$this->set('title_for_layout','29SIX SITE');	
		$this->render('skills');
	}
	
	public function work() {
		$this->autoRender = false;
		$this->set('title_for_layout','29SIX SITE');	
		$this->render('work');
	}
	
	/*
	public function hireme() {
		$this->autoRender = false;
		$this->set('title_for_layout','29SIX SITE');
		//$this->set('twits', $this->twitterapi());
		$this->render('hireme');
	}
	*/
	
	public function blog() {
		$this->autoRender = false;
		$this->set('title_for_layout','29SIX SITE');	
		$this->render('blog');
	}
	
	public function about() {
		$this->autoRender = false;
		$this->set('title_for_layout','29SIX SITE');	
		$this->render('about');
	}
	

	public function twitterapi() {

		ini_set('display_errors', 1);
		App::import('Vendor', 'twitterAPIExchange/TwitterAPIExchange');

		$settings = array(
		    'oauth_access_token' => "976457490-1QKl7Ygk8GXGqgT28iSSVJ8Fek6D6R3bQ0mKmVys",
		    'oauth_access_token_secret' => "26yNcTPhpkzpXuYiyrA9GhF9dygpqJzpd10BzRVGTgRCY",
		    'consumer_key' => "gz62wgEadwtK0OE2g0DgJdRlw",
		    'consumer_secret' => "75dJNzybEFmf6p8FcK9pe6Lzk9gNWEVZi6iSaX8PP3u4lCEDaF"
		);

		$url = 'https://api.twitter.com/1.1/statuses/user_timeline.json';
		$getfield = '?screen_name=29six&count=4';
		$requestMethod = 'GET';
		$twitter = new TwitterAPIExchange($settings);
		$tweets = json_decode($twitter->setGetfield($getfield)->buildOauth($url, $requestMethod)->performRequest(), TRUE);

		$twits = [];
		foreach ($tweets as $tweet) {
		    array_push($twits, $tweet['text']);
		}

		return $twits;
	}
	
	
	
}