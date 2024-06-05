package com.magik.service.moment;

import com.github.pagehelper.Page;
import com.github.pagehelper.PageHelper;
import com.magik.bean.Moment;
import com.magik.bean.MomentFile;
import com.magik.dto.moment.MomentDTO;
import com.magik.mapper.moment.MomentMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MomentService {
  @Autowired
  private MomentMapper momentMapper;
  public int createMoment(MomentDTO momentDTO){
    return momentMapper.createMoment(momentDTO);
  }
  public int addFileToMoment(List<MomentFile> list){
    return momentMapper.addFileToMoment(list);
  }
  public Page<Moment> getAllMoment(Integer page,Integer limit){
    Page<Moment> p = PageHelper.startPage(page,limit);
    List<Moment> moments = momentMapper.getAllMoment(page,limit);
    return p;
  }
}
