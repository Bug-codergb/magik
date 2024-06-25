package com.magik.mapper.lists;

import com.magik.bean.Lists;
import com.magik.dto.lists.ListsDTO;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface ListsMapper {
  public int createLists(ListsDTO lists);
  public List<Lists> getAllLists(@Param("page") Integer page,@Param("limit") Integer limit);
  public int deleteLists(@Param("id") String id);
  public int updateLists(ListsDTO listsDTO);
}
