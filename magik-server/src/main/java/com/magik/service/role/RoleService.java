package com.magik.service.role;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.magik.bean.Role;
import com.magik.bean.RoleMenu;
import com.magik.mapper.role.RoleMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoleService {
  @Autowired
  private RoleMapper roleMapper;
  public int createRole(Role role){
    return roleMapper.createRole(role);
  }
  public Page<Role> getAllRole(Integer page,Integer limit){
    Page<Role> p = PageHelper.startPage(page,limit);
    List<Role> roleList = roleMapper.getAllRole(page, limit);
    return p;
  }
  public int deleteRole(String id){
    return roleMapper.deleteRole(id);
  }
  public int setRoleMenu(List<RoleMenu> roleMenuList){
    return roleMapper.setRoleMenu(roleMenuList);
  }
  public int deleteRoleMenu(String roleId){
    return roleMapper.deleteRoleMenu(roleId);
  }
}
