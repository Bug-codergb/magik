package com.magik.service.menu;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.magik.bean.Menu;
import com.magik.dto.menu.MenuDTO;
import com.magik.mapper.menu.MenuMapper;
import com.magik.result.PageResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MenuService {
  @Autowired
  MenuMapper menuMapper;
  public int createMenu(MenuDTO menu){
    return menuMapper.createMenu(menu);
  }
  public Page<Menu> getMenuList(Integer page, Integer limit){
    Page<Menu> p = PageHelper.startPage(page,limit);
    List<Menu> menuList = menuMapper.getMenuList(page,limit);
    return p;
  }
  public int deleteMenuById(String id){
    return menuMapper.deleteMenuById(id);
  }
  public List<Menu> getUserMenu(String userId){
    return menuMapper.getUserMenu(userId);
  }
}
