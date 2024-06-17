package com.magik.mapper.role;

import com.magik.bean.Role;
import com.magik.bean.RoleMenu;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface RoleMapper {
  public int createRole(Role role);
  public List<Role> getAllRole(Integer page,Integer limit);
  public int deleteRole(@Param("id") String id);
  public int setRoleMenu(List<RoleMenu> roleMenuList);
  public List<String> getRoleMenu(@Param("roleId") String roleId);
}
