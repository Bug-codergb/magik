package com.magik.controller.user;
import com.magik.annotation.LoginAuth;
import com.magik.bean.User;
import com.magik.bean.UserRole;
import com.magik.dto.user.UserDTO;
import com.magik.result.PageResult;
import com.magik.result.R;
import com.magik.service.user.UserService;
import org.simpleframework.xml.Path;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {
  @Autowired
  private UserService userService;
  @PostMapping("/create")
  public R<String> createUser(@RequestBody UserDTO user){
    user.setUserId(new Date().getTime()+"");
    userService.createUser(user);
    if(user.getRoleList().size()!=0){
      List<UserRole> userRoleList = new ArrayList<>();
      for(String role : user.getRoleList()){
        UserRole userRole = new UserRole();
        userRole.setRoleId(role);
        userRole.setUserId(user.getUserId());
        userRoleList.add(userRole);
      }
      userService.setUserRole(userRoleList);
    }
    return R.ok("");
  }
  @PostMapping("/list")
  public PageResult<User> getUserList(@RequestParam("page") Integer page,
                                      @RequestParam("limit") Integer limit){
    return PageResult.success(userService.getUserList(page, limit));
  }
  @PostMapping("/delete/{id}")
  public R<String> deleteUser(@PathVariable("id") String id){
    userService.deleteUser(id);
    return R.ok("");
  }
  @LoginAuth
  @PostMapping("/update/{id}")
  public R<String> updateUser(@PathVariable("id") String id, @RequestBody UserDTO user){
    user.setUserId(id);
    userService.deleteUserRole(id);
    userService.updateUser(user);
    if(user.getRoleList().size()!=0){
      List<UserRole> userRoleList = new ArrayList<>();
      for(String role : user.getRoleList()){
        UserRole userRole = new UserRole();
        userRole.setRoleId(role);
        userRole.setUserId(user.getUserId());
        userRoleList.add(userRole);
      }
      userService.setUserRole(userRoleList);
    }
    return R.ok("");
  }
  @GetMapping("/detail/{id}")
  public R<User> getUserDetail(@PathVariable("id") String id){
    User user = userService.getUserById(id);
    return R.ok(user);
  }
}
