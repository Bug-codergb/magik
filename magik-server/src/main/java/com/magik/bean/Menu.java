package com.magik.bean;

import com.fasterxml.jackson.annotation.JsonFormat;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class Menu {
  private String id;
  private Menu parent;
  private String parentId;
  private List<Menu> children;
  private String title;
  private String path;
  private int sort;
  private String redirect;
  private String icon;
  private String component;
  private String meta;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date createTime;
  @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
  private Date updateTime;
}
