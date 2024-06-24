package com.magik.config;

import com.magik.interceptor.InterceptorController;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {
  @Override
  public void addInterceptors(InterceptorRegistry registry) {
    registry.addInterceptor(new InterceptorController())
            .addPathPatterns("/**")
            .excludePathPatterns("/login")
            .excludePathPatterns("/register");
  }
}
