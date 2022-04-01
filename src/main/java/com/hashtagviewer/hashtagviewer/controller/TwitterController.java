package com.hashtagviewer.hashtagviewer.controller;

import com.hashtagviewer.hashtagviewer.services.TwitterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

@RestController
@RequestMapping(value = "/twitter")
public class TwitterController {

    @Autowired
    TwitterService twitterService;

    @GetMapping("/last5tweets")
    public String getFiveLatestTweets() {

        try {
            return twitterService.getFiveLatestTweets();
        } catch (InterruptedException e) {
            e.printStackTrace();
            return "Inturrupted Error ";
        } catch (ExecutionException e) {
            e.printStackTrace();
            return "ExecutionException Error ";
        } catch (TimeoutException e) {
            e.printStackTrace();
            return "TimeoutException Error ";
        }
    }
}
