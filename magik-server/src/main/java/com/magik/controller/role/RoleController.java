package com.magik.controller.role;

import com.github.pagehelper.Page;
import com.magik.bean.Role;
import com.magik.bean.RoleMenu;
import com.magik.dto.role.RoleDTO;
import com.magik.mapper.role.RoleMapper;
import com.magik.result.PageResult;
import com.magik.result.R;
import com.magik.service.role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/role")
public class RoleController {
  @Autowired
  private RoleService roleService;
  @PostMapping("/create")
  public R<String> createRole(@RequestBody Role role){
    String id = new Date().getTime()+"";
    role.setId(id);
    roleService.createRole(role);
    return R.ok("");
  }
  @PostMapping("/all")
  public PageResult<Role> getAllRole(@RequestParam("page") Integer page,
                               @RequestParam("limit") Integer limit){
    Page<Role> roles = roleService.getAllRole(page, limit);
    return PageResult.success(roles);
  }
  @PostMapping("/delete/{id}")
  public R<String> deleteRole(@PathVariable("id") String id){
    roleService.deleteRole(id);
    return R.ok("");
  }
  @PostMapping("/set/menu")
  public R<String> setRoleMenu(@RequestBody RoleDTO roleDTO){
    List<RoleMenu> roleMenuList = new ArrayList<>();
    roleService.deleteRoleMenu(roleDTO.getId());
    if(roleDTO.getMenuList().size()!=0){
      for(String roleStr : roleDTO.getMenuList()){
        RoleMenu roleMenu = new RoleMenu();
        roleMenu.setRoleId(roleDTO.getId());
        roleMenu.setMenuId(roleStr);
        roleMenuList.add(roleMenu);
      }
    }
    roleService.setRoleMenu(roleMenuList);
    return R.ok("");
  }
  @PostMapping("/delete/menu/{roleId}")
  public R<String> deleteRoleMenu(@PathVariable("roleId") String roleId){
    roleService.deleteRoleMenu(roleId);
    return R.ok("");
  }
}
