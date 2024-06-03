package com.magik.service.menu;

import com.magik.bean.Menu;
import com.magik.dto.menu.MenuDTO;
import com.magik.mapper.menu.MenuMapper;
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
  public List<Menu> getMenuList(){
    return menuMapper.getMenuList();
  }
  public int deleteMenuById(String id){
    return menuMapper.deleteMenuById(id);
  }
}
