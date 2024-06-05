package com.magik.controller.moment;

import com.github.pagehelper.Page;
import com.magik.bean.Moment;
import com.magik.bean.MomentFile;
import com.magik.result.PageResult;
import com.magik.dto.moment.MomentDTO;
import com.magik.result.R;
import com.magik.service.moment.MomentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/moment")
public class MomentController {
  @Autowired
  private MomentService momentService;
  @PostMapping("/create")
  public R<String> createMoment(@RequestBody  MomentDTO moment){

    String id = new Date().getTime()+"";
    moment.setId(id);
    momentService.createMoment(moment);

    if(moment.getFilelist().size()!=0){
      List<MomentFile> momentFileList = new ArrayList<>();
      List<String> fileIdList = moment.getFilelist();

      for(String fileId : fileIdList){
        MomentFile momentFile = new MomentFile();
        momentFile.setMomentId(id);
        momentFile.setFileId(fileId);
        momentFileList.add(momentFile);
      }
      momentService.addFileToMoment(momentFileList);
    }
    return R.ok("");
  }
  @PostMapping("/list")
  public PageResult<Moment> getAllMoment(@RequestParam("page") Integer page,
                                      @RequestParam("limit") Integer limit){
    Page<Moment> moments = momentService.getAllMoment(page, limit);
    return PageResult.success(moments);
  }
}
