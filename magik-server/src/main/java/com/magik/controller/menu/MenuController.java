package com.magik.controller.menu;

import com.github.pagehelper.Page;
import com.magik.bean.Menu;
import com.magik.dto.menu.MenuDTO;
import com.magik.result.PageResult;
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
  public PageResult<Menu> getMenuList(@RequestParam("page") Integer page,
                                      @RequestParam("limit") Integer limit){
    return PageResult.success(menuService.getMenuList(page,limit));
  }
  @PostMapping("/delete/{id}")
  public R<String> deleteMenu(@PathVariable("id") String id){
    System.out.println(id);
    menuService.deleteMenuById(id);
    return R.ok("");
  }
  @PostMapping("/list/user/{userId}")
  public R<List<Menu>> getUserMenu(@PathVariable("userId") String userId){
    List<Menu> menuList = menuService.getUserMenu(userId);
    return R.ok(menuList);
  }
}
