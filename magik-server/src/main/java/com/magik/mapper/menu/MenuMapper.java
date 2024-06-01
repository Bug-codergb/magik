package com.magik.mapper.menu;

import com.magik.bean.Menu;
import com.magik.dto.menu.MenuDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MenuMapper {
  public int createMenu(MenuDTO menuDTO);
  public List<Menu> getMenuList();
  public List<Menu> getChildrenMenu(@Param("parentId") String parentId);
}
