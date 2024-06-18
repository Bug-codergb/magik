package com.magik.mapper.menu;

import com.magik.bean.Menu;
import com.magik.dto.menu.MenuDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface MenuMapper {
  public int createMenu(MenuDTO menuDTO);
  public List<Menu> getMenuList(Integer page, Integer limit);
  public List<Menu> getChildrenMenu(@Param("parentId") String parentId);
  public int deleteMenuById(@Param("id") String id);
  public List<Menu> getUserMenu(@Param("userId") String userId);
}
