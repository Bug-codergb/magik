package com.magik.mapper.user;

import com.magik.bean.User;
import org.apache.ibatis.annotations.Param;

public interface UserMapper {
  public User getUserById(@Param("id") String id);
}
