package com.magik.bean;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoleMenu {
  private String roleId;
  private String menuId;
  private Integer half;
}
