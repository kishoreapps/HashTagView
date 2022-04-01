package com.hashtagviewer.hashtagviewer.controller;


import com.hashtagviewer.hashtagviewer.services.WeatherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.concurrent.ExecutionException;
import java.util.concurrent.TimeoutException;

@RestController
@RequestMapping(value = "/weather")
public class WeatherController {

    @Autowired
    WeatherService weatherService;

    @GetMapping("/search")
    public String getLocalWeather(@RequestParam(defaultValue = "Tampa") String city) {
        try {
            return weatherService.getLocalWeather(city);
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

    @GetMapping("/forecast")
    public String getThreeDayForecast(@RequestParam(defaultValue = "Tampa") String city) {
        try {
            return  weatherService.getThreeDayForecast(city);
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
