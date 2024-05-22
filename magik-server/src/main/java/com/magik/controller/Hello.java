package com.magik.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/hello")
public class Hello {
  @RequestMapping("/gb")
  public String helloWorld(){
    return "hello world";
  }
}
