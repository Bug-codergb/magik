package com.magik.utils;

import com.magik.bean.User;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.core.io.ClassPathResource;

import java.io.IOException;
import java.util.Date;

public class Token {
  private static final long Expire = 6000*60*24*7;
  private static String privateKey;
  public static void setPrivateKey(String privateKey) {
    Token.privateKey = privateKey;
  }

  public static String getPrivateKey() {
    return privateKey;
  }


  public String createJWT(User user) throws IOException {
    ClassPathResource resource = new ClassPathResource("key/private.key");
    String keyPath  =resource.getFile().getPath();
    String key = new ReadFileToString(keyPath).readFile();
    setPrivateKey(key);
    String token = Jwts.builder().setSubject(user.getUserId())
                                 .claim("userId",user.getUserId())
            .claim("userName",user.getUserName()).setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis()+Expire))
            .signWith(SignatureAlgorithm.HS256,getPrivateKey()).compact();
    return token;
  }
  public Claims parseToken(String token) throws Exception{
    ClassPathResource resource = new ClassPathResource("key/private.key");
    String keyPath  =resource.getFile().getPath();
    String key = new ReadFileToString(keyPath).readFile();
    setPrivateKey(key);
    Claims claims = Jwts.parser().setSigningKey(getPrivateKey()).parseClaimsJws(token).getBody();
    return claims;
  }
}
