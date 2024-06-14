package com.magik.controller.login;

import com.magik.bean.User;
import com.magik.result.R;
import com.magik.utils.Token;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
  @PostMapping("/login")
  public R<String> login(User user) throws Exception{
    Token token = new Token();
    String tokenStr = token.createJWT(user);
    System.out.println(tokenStr);
    return R.ok("");
  }
}
