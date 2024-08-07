package com.magik.mapper.user;

import com.magik.bean.Moment;
import com.magik.bean.Role;
import com.magik.bean.User;
import com.magik.bean.UserRole;
import com.magik.dto.user.UserDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface UserMapper {
  public User getUserById(@Param("id") String id);
  public User getUserByName(@Param("userName") String userName);
  public int createUser(UserDTO userDTO);
  public int setUserRole(List<UserRole> userRoleList);
  public int deleteUserRole(@Param("userId") String userId);
  public List<User> getUserList(Integer page,Integer limit);
  public List<Role> getUserRole(@Param("userId") String userId);
  public String getUserAvatar(@Param("userId") String userId);
  public int deleteUser(@Param("userId") String userId);
  public int updateUser(UserDTO user);
 // public User getUserById(@Param("userId") String userId);

  public List<Moment> getUserMoment(@Param("userId") String userId,Integer page,Integer limit);
}
