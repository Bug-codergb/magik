package com.magik.controller.login;

import com.magik.bean.User;
import com.magik.result.R;
import com.magik.service.user.UserService;
import com.magik.utils.Token;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
  @Autowired
  private UserService userService;
  @PostMapping("/login")
  public R<User> login(@RequestBody User user) throws Exception{

    User userInfo = userService.getUserByName(user.getUserName());
    Token token = new Token();
    String tokenStr = token.createJWT(userInfo);
    userInfo.setPassword("***");
    userInfo.setToken(tokenStr);
    return R.ok(userInfo);
  }
}
