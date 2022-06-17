import React from 'react';

const [isDark,setDark] = useState(true);


function toggle(){
    setDark(!isDark);
    localStorage.setItem('dark',isDark)
}
export default {toggle,isDark,setDark}