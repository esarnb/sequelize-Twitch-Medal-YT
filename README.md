# Discord Bot - Unified Database Handler

> Tables
```
table Users: id, uuid unique users, twitch, medalTV, youtube
foreignKeys: 

table Guilds: id, uuid unique servers, one prefix, boolean g_all_hooks
foreignKeys: 

table Channels: id, uuid unique channels, boolean c_all_hooks
foreignKeys: 

table Hooks: id, uuid unique hooks, t_twitch, t_yt, t_mtv, 
foreignKeys: 
```

> Delete Cascade
```
If i delete a user, it should delete all hooks on that user

If a hook is deleted, it should delete itself from the table (and run channel's hook if empty check)

If a channel has no hooks, it should delete itself (running channel's hook if empty check), (and run discord delete webhook if hasPerms)
If a channel has been deleted, it should delete itself from table and all hooks within

If a guild is deleted, should delete all users within, all channels within guild, all hoooks within channel
```
