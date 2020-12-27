// ==UserScript==
// @name        Bing Search Material Theme
// @name:zh-CN  必应搜索质感主题
// @description Show results as cards, follow Material Design.
// @description:zh-CN 以卡片形式展示结果，遵循Material Design。
// @namespace   https://greasyfork.org/users/197529
// @version     0.7.2
// @author      kkocdko
// @license     Unlicense
// @match       *://*.bing.com/search
// @run-at      document-start
// ==/UserScript==
"use strict";

document.head.appendChild(document.createElement("style")).textContent = `

#b_context,
#b_footer,
#b_header #id_h,
#b_header .b_logoArea,
#b_content #ev_talkbox_wrapper,
#b_content #mfa_root,
#b_results .sb_fav,
#b_results .fbans,
#fbpgbt,
#b_notificationContainer_bop,
#b_opalpers {
  display: none;
}

body {
  --card-shadow: 0 1px 2px 0 rgba(60, 64, 67, 0.3),
    0 1px 3px 1px rgba(60, 64, 67, 0.15);
  min-width: 0;
  background: rgb(248, 249, 250);
}

#b_header,
#b_header .b_searchboxForm,
#b_content,
#b_results {
  width: 90vw;
  min-width: 0;
  max-width: 700px;
  margin: 0 auto;
  background: rgba(0, 0, 0, 0);
}

#b_header > * {
  z-index: 1;
  margin: 0;
}

#b_header #est_switch > *::after,
#b_header .b_searchboxForm,
#b_header #sa_ul {
  border: 0;
  box-shadow: var(--card-shadow);
}

#b_header .b_searchboxForm {
  text-align: right;
  background: #fff;
}

#b_header #sb_form_q {
  float: left;
  width: calc(100% - 150px);
  margin: 0;
}

#b_header .sa_as {
  text-align: left;
}

#b_header #sb_form,
#b_content #b_tween {
  margin-bottom: 10px;
}

#b_content {
  padding-left: 0;
}

#b_results > * {
  padding: 15px 20px;
  margin-bottom: 15px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: var(--card-shadow);
}

#b_results > * > * {
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  border: 0;
  outline: 0;
}

#b_results :not(.b_rs) > h2 {
  padding-bottom: 5px;
}

#b_results h2 a,
#b_results .b_factrow a,
#b_results .b_rs a {
  color: rgb(13, 71, 161);
  text-decoration: none;
}

#b_results strong,
#b_results .b_factrow strong,
#b_results .b_rs strong {
  color: rgb(183, 28, 28);
}

#b_results .b_title .square_mi {
  padding-left: 0;
}

/* Media List Scroll Button */
#b_results .b_overlay .btn {
  margin: -16px 5px;
}

/* View More Button */
#b_results .salink,
#b_results .b_expDesk {
  margin-bottom: 30px;
}

/* Sports Match Card */
#b_results li > .sportsAns {
  margin: 0 -1px -15px;
}

/* Map Card */
#b_results .mt_mop,
#b_results .lgb_ans {
  margin: -15px -20px;
}
#b_results .mt_mop table {
  margin-left: 10px;
}
#b_results .dynMap {
  width: 100%;
}

/* Dict Card */
#b_results .dict_oa {
  padding: 0;
}

/* Translate Card */
#b_results #tt_perajx {
  margin: -17px -2px;
}

/* People Also Ask Card */
#b_results #df_listaa {
  margin: -15px -20px -20px;
}

`.replace(/;/g, "!important;");
