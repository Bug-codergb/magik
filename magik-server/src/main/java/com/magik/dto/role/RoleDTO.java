package com.magik.dto.role;

import com.magik.bean.Role;
import com.magik.bean.RoleMenu;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RoleDTO extends Role {
  private List<RoleMenu> menuList;
}
