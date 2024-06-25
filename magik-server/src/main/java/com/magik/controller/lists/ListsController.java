package com.magik.controller.lists;

import com.magik.annotation.LoginAuth;
import com.magik.bean.Lists;
import com.magik.dto.lists.ListsDTO;
import com.magik.result.PageResult;
import com.magik.result.R;
import com.magik.service.lists.ListsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.Date;

@RestController
@RequestMapping("/lists")
public class ListsController {
  @Autowired
  ListsService listsService;

  @LoginAuth
  @PostMapping("/")
  public R<String> createLists(@RequestBody ListsDTO lists){
    String id = new Date().getTime()+"";
    lists.setId(id);
    listsService.createLists(lists);
    return R.ok("");
  }
  @GetMapping("/all")
  public PageResult<Lists> getAllLists(@RequestParam("page") Integer page,
                                       @RequestParam("limit") Integer limit){
    return PageResult.success(listsService.getAllLists(page, limit));
  }
  @PostMapping("/delete/{id}")
  public R<String> deleteLists(@PathVariable("id") String id){
    listsService.deleteLists(id);
    return R.ok("");
  }
  @PostMapping("/update/{id}")
  public R<String> updateLists(@PathVariable("id") String id,@RequestBody ListsDTO lists){
    lists.setId(id);
    listsService.updateLists(lists);
    return R.ok("");
  }
}
