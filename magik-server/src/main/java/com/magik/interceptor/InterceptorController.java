package com.magik.interceptor;

import com.magik.annotation.LoginAuth;
import com.magik.result.R;
import com.alibaba.fastjson.JSON;
import com.magik.utils.Token;
import io.jsonwebtoken.Claims;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.method.HandlerMethod;
public class InterceptorController implements HandlerInterceptor {
  @Override
  public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
    if(!(handler instanceof HandlerMethod)){
      return true;
    }
    HandlerMethod handlerMethod=(HandlerMethod)handler;
    LoginAuth isExists=handlerMethod.getMethodAnnotation(LoginAuth.class);
    if(isExists!=null){
      String token = request.getHeader("Authorization");
      try{
        if(token ==null || token.equals("")){
          response.setStatus(200);
          response.setCharacterEncoding("UTF-8");
          response.setContentType("application/json;charset=utf-8");
          R<String> res = R.unauthorized("您没有权限访问");

          response.getWriter().write(JSON.toJSONString(res));
          return false;
        }else{
          token = token.replace("Bearer ","");
          Token tokenUtils = new Token();
          Claims claims = tokenUtils.parseToken(token);
          request.setAttribute("userId",claims.get("userId"));
          request.setAttribute("userName",claims.get("userName"));
          return true;
        }
      }catch (Exception e){
        System.out.println(e);
        response.setStatus(200);
        response.setCharacterEncoding("UTF-8");
        response.setContentType("application/json;charset=utf-8");
        R<String> res = R.unauthorized("您没有权限访问");
        response.getWriter().write(JSON.toJSONString(res));
        return false;
      }
    }else{
      return true;
    }
  }

  @Override
  public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
    HandlerInterceptor.super.postHandle(request, response, handler, modelAndView);
  }

  @Override
  public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
    HandlerInterceptor.super.afterCompletion(request, response, handler, ex);
  }
}
