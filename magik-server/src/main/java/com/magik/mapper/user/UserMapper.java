package com.magik.mapper.user;

import com.magik.bean.Role;
import com.magik.bean.User;
import com.magik.bean.UserRole;
import com.magik.dto.user.UserDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
  public User getUserById(@Param("id") String id);
  public int createUser(UserDTO userDTO);
  public int setUserRole(List<UserRole> userRoleList);
  public List<User> getUserList(Integer page,Integer limit);
  public List<Role> getUserRole(@Param("userId") String userId);
}
