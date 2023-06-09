import { useContext } from "react";
import { tokens, ColorModeContext } from "../../theme";
import { Box, IconButton, InputBase, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import {
  DarkModeOutlined,
  ExitToApp,
  LightModeOutlined,
  NotificationsOutlined,
  PersonOutlineSharp,
  SettingsOutlined,
} from "@mui/icons-material";

import { useDispatch } from 'react-redux';
import { logout } from "../../store/reducer/auth";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
  }

  return (
    <Box display="flex" justifyContent="space-between" p={2}>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search..." />
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchIcon />
        </IconButton>
      </Box>
      <Box
        display="flex"
        backgroundColor={colors.primary[400]}
        borderRadius="3px"
      >
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlined />
          ) : (
            <LightModeOutlined />
          )}
        </IconButton>
        {/* <IconButton>
          <NotificationsOutlined />
        </IconButton>
        <IconButton>
          <SettingsOutlined />
        </IconButton>
        <IconButton>
          <PersonOutlineSharp />
        </IconButton> */}
        <IconButton onClick={handleLogout}>
          <ExitToApp />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Topbar;
