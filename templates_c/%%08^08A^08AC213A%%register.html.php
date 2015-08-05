<?php /* Smarty version 2.6.26, created on 2015-04-02 04:27:09
         compiled from register.html */ ?>
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" style="text/css" href="../style/register.css">
<link rel="stylesheet" href="file:///C|/Users/Administrator/Desktop/bootstrap.css">
<title>登陆</title>
</head>

<body>
<div >
    <form action="register.php" method="POST">
        <h2>注册</h2>
        <hr/>
        <label>user:&nbsp;&nbsp;</label>
        <input type="text" name="name1" value="<?php echo $this->_tpl_vars['name1']; ?>
"><br/>
        <hr/>
        <label>password:</label>
        <input type="password" name="name2" value="<?php echo $this->_tpl_vars['name2']; ?>
">
        <hr/>
        <button type="submit" value="登陆 class=" btn-info">登陆</button>
        <button type="reset" value="重置" class=" btn-info">重置</button>
    </form>
</div>
</body>
</html>