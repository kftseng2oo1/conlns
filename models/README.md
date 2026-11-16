# 模型插槽（models/）

把 `.glb` 檔放進這個資料夾、用下列檔名，App 會自動以它取代程式繪製的雕塑；沒有檔案時沿用原本的版本。
模型會自動縮放成與原雕塑同高、底部貼地、置中於原位置。

| 檔名 | 取代對象 | 數量 |
| --- | --- | --- |
| `confucius.glb` | 72 公尺孔子銅像（**已內附**，可互動）＋杏壇講學的彩繪孔子 | 2（銅像換青銅材質） |
| `dragon.glb` | 信廳 青龍（**已內附**，可互動） | 1 |
| `tiger.glb` | 義廳 白虎（**已內附**，可互動） | 1 |
| `xuanwu.glb` | 智廳 玄武（**已內附**，可互動） | 1 |
| `zhuque.glb` | 禮廳 朱雀（**已內附**，可互動） | 1 |
| `qilin.glb` | 集賢廳＋仁廳 麒麟（**已內附**，可互動） | 4（自動複製） |
| `sage.glb` | 七十二賢廊 賢人 | 72（自動複製，建議 5,000 面以下） |

## 選用設定 `models.json`

```json
{
  "slots": {
    "dragon": { "rotY": 90, "scale": 1.0, "tint": "#3a8a7a", "animate": true, "speed": 0.5 },
    "tiger":  { "file": "white-tiger.glb", "rotY": 180 }
  },
  "credits": [
    { "file": "dragon.glb", "title": "Chinese Dragon", "author": "作者名", "license": "CC BY 4.0", "url": "https://..." }
  ]
}
```

- `rotY`：轉向角度（度）；`scale`：相對原雕塑高度的倍率；`tint`：統一改色（例如鎏金、青銅）；`animate`：播放模型內建動畫。
- `credits` 會顯示在 App「目錄 → 關於 → 模型來源」。CC BY 授權的模型務必填寫作者與網址。
- 請使用未經 Draco／meshopt 壓縮的 `.glb`。

`xuanwu.glb`（玄武）為本專案原創程式生成模型，內含 `Idle`、`Walk`、`Retract`、`SnakeRear`、`Blink`、`Awaken` 六段動畫；載入後可點擊互動：點龜殼鳴鐘發光、點龜頭縮頸、點靈蛇昂首吐信、點腳踏步，連點五下喚醒神獸。若在 `models.json` 給它設 `tint`，則改為一般靜態雕塑。

`zhuque.glb`（朱雀）同為原創程式生成模型，內含 `Idle`、`Cry`、`Flap`、`Display`、`Flame`、`Fly`、`Awaken` 七段動畫；點頭長鳴、點翅膀振翅、點尾羽開屏、點火焰台火焰竄高，連點五下浴火重生並繞殿飛翔。

`dragon.glb`（青龍）同為原創程式生成模型，翡翠金紋鱗、青焰鬃毛、金角長鬚、握發光龍珠，內含 `Idle`、`Roar`、`Undulate`、`Pearl`、`Cloud`、`Fly`、`Awaken` 七段動畫。

`tiger.glb`（白虎）同為原創程式生成模型：端坐雪岩、水墨黑紋金箔白毛、青銅鑲玉肩甲與護心鏡、身側參宿星圖，內含 `Idle`、`Roar`、`Swipe`、`TailLash`、`Stand`、`Run`、`Awaken` 七段動畫。

`qilin.glb`（麒麟）同為原創程式生成模型：鹿身馬蹄龍首、翡翠金鱗、水晶獨角、星點靈氣鬃、青銅金飾玉珠、金焰四肢，站在刻「仁」字的雕花石台上；內含 `Idle`、`Cry`、`Stamp`、`Shake`、`Scroll`（吐玉書「天下為公」）、`Leap`、`Awaken` 七段動畫。四隻各自有獨立的動畫與材質。

`confucius.glb`（孔子）為原創程式生成模型：小冠金簪、長髯、交領右衽寬袍大袖、捧竹簡；動畫 Idle／Bow（作揖）／Nod（頷首）／Teach（講學）／Awaken（拜師入門，背後「仁」字金環）。材質依名稱（robe、trim、skin…）在導覽裡換成青銅或喚醒後的藍金配色。

五隻神獸的互動寫在 `index.html` 的 `BEAST_DEFS` 設定表；之後青龍、白虎、麒麟只要做好帶動畫的 glb，再加一項設定即可。

`bird-parrot.glb`（青鳥）與 `bird-stork.glb`（鶴群）取自 three.js 範例模型（原作 mirada.com，ro.me 專案），隨 three.js 以 MIT 授權發布。
