package com.magik.controller.role;

import com.github.pagehelper.Page;
import com.magik.bean.Role;
import com.magik.mapper.role.RoleMapper;
import com.magik.result.PageResult;
import com.magik.result.R;
import com.magik.service.role.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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
}
