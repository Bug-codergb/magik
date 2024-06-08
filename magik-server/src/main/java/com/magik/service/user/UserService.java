package com.magik.service.user;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.magik.bean.User;
import com.magik.bean.UserRole;
import com.magik.dto.user.UserDTO;
import com.magik.mapper.user.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
  @Autowired
  private UserMapper userMapper;
  public int createUser(UserDTO user){
    return userMapper.createUser(user);
  }
  public int setUserRole(List<UserRole> userRoleList){
    return userMapper.setUserRole(userRoleList);
  }
  public Page<User> getUserList(Integer page,Integer limit){
    Page<User> p = PageHelper.startPage(page,limit);
    List<User> userList = userMapper.getUserList(page, limit);
    return p;
  }
}