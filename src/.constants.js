module.exports = Object.freeze({
  TOKEN: '1821575125:AAEzDl0all_lclEZ3BkpO5M_vqd8--KzSHc',
  ARIA_SECRET: 'myaria2',
  ARIA_DOWNLOAD_LOCATION: '/home/user/path/to/download/dir (no trailing "/")',
  ARIA_DOWNLOAD_LOCATION_ROOT: '/', //The mountpoint that contains ARIA_DOWNLOAD_LOCATION
  ARIA_FILTERED_DOMAINS: [], // Prevent downloading from URLs containing these substrings
  ARIA_FILTERED_FILENAMES: [], // Files/top level directories with these substrings in the filename won't be downloaded
  ARIA_PORT: 8210, // Port for aria2c RPC server, if you change this here, make sure to update aria.sh as well
  GDRIVE_PARENT_DIR_ID: '1FXzjeUMUOmVvgphEwBOy9IfHeoyNa1Ol',
  OTHER_GDRIVE_DIR_IDS: [1EyIS8VrWV-gPEx5FCsdSn9uPH3Jcg6oS, 1F-WfKjX3r8KQZzd1QrNRJiirnDOoAidd, 1F3BpGMVDV0VhIsY-dnM4uPndaJYIyYYL, 1F1risA6ZnCZY8h-6neXTpSPHwYZiE0HE, 1F0h_kaAlWjH1CAwAjPEN_OWj-ZCc6ib, 1gyOzefL8LlWNv4awhj7FU3wT_FRCD_7j, 1uFux1RLbS97yC0UyilPbpSpSgB60IBg8, 1cE4GNwOkxK70Plm9L_AuPFlkb8bEAkNv, 1FXzjeUMUOmVvgphEwBOy9IfHeoyNa1Ol, 1F6sRbpSxwKNO-ZixmF93OnV4CzvCUki1, 1EFKsXKYNcnjAiijfDBWLBo76-QqUFhbD, 1Cb1Fb7XpPs4EBnl2_GHS5cUV7pBsBNIl, 1iOfK6Xz-yJlVXaGXZUB1RFKDJBITj3wf, 1UvO-Yz-KzOGmdxlbMI18O0nXx9RUHVgQ, 1dt7SFetjbzreGb4kzM6YJ5uUVQpfR0xL, 1gIem7uVcOe0mnvkaDqfHDn_zLidx--bx, 1qH-ozi8AFe4Tjr79P0RbmHCEEOJUitRN], // This is needed if u want to look for files in multiple dirs on list command
  SUDO_USERS: [1478286558, 1132260124],	// Telegram user IDs. These users can use the bot in any chat.
  AUTHORIZED_CHATS: [-1001250182607, -1001304102973],	// Telegram chat IDs. Anyone in these chats can use the bot.
  STATUS_UPDATE_INTERVAL_MS: 12000, // A smaller number will update faster, but might cause rate limiting
  DRIVE_FILE_PRIVATE: {
    ENABLED: false,
    EMAILS: []
  },
  DOWNLOAD_NOTIFY_TARGET: {  // Information about the web service to notify on download completion.
    enabled: false,   // Set this to true to use the notify functionality
    host: 'hostname.domain',
    port: 80,
    path: '/botNotify'
  },
  COMMANDS_USE_BOT_NAME: {
    ENABLED: false,  // If true, all commands except '/list' has to have the bot username after the command
    NAME: "@nameOf_bot"
  },
  IS_TEAM_DRIVE: true,
  USE_SERVICE_ACCOUNT: true,
  INDEX_DOMAIN: "https://edithseedbox.tk/6:",
  TELEGRAPH_TOKEN: '7284b66455d2fe5d0aa815642449f7975a0a91d7ee5d72bf92fcd0bb4a3d', // Telegraph token, if you want to show search results in telegra.ph else keep it blank,
  STOP_DUPLICATE_MIRRORS: true // To stop duplicate mirror
});
