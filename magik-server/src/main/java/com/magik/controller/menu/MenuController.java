package com.magik.controller.menu;

import com.magik.bean.Menu;
import com.magik.dto.menu.MenuDTO;
import com.magik.result.R;
import com.magik.service.menu.MenuService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;
@RestController
@RequestMapping("/menu")
public class MenuController {
  @Autowired
  MenuService menuService;

  @PostMapping("/create")
  public R<String> createMenu(@RequestBody MenuDTO menuDTO){
    String id = new Date().getTime()+"";
    menuDTO.setId(id);
    menuService.createMenu(menuDTO);
    return R.ok("");
  }
  @PostMapping("/list")
  public R<List<Menu>> getMenuList(){
    List<Menu> menuList = menuService.getMenuList();
    return R.ok(menuList);
  }
  @PostMapping("/delete/{id}")
  public R<String> deleteMenu(@PathVariable("id") String id){
    System.out.println(id);
    menuService.deleteMenuById(id);
    return R.ok("");
  }
}