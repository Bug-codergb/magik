package com.magik.service.lists;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.magik.bean.Lists;
import com.magik.dto.lists.ListsDTO;
import com.magik.mapper.lists.ListsMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ListsService {
  @Autowired
  ListsMapper listsMapper;
  public int createLists(ListsDTO listsDTO){
    return listsMapper.createLists(listsDTO);
  }
  public Page<ListsDTO> getAllLists(Integer page,Integer limit){
    Page<ListsDTO> p = PageHelper.startPage(page,limit);
    List<ListsDTO> listsList = listsMapper.getAllLists(page, limit);
    return p;
  }
  public int deleteLists(String id){
    return listsMapper.deleteLists(id);
  }
  public int updateLists(ListsDTO listsDTO){
    return listsMapper.updateLists(listsDTO);
  }
}
