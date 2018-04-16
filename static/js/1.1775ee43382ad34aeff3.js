webpackJsonp([1],{804:function(e,t,n){var o=n(82)(n(818),n(838),null,null,null);e.exports=o.exports},812:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(125),i=n.n(o),s=n(83);t.default={props:{commentsUrl:{type:String,required:!0}},data:function(){return{isWrite:!0,newComment:null,renderedMarkdown:"",isCommitting:!1}},computed:i()({},n.i(s.b)(["accessToken","loginLink"]),{commentBtnDisabled:function(){return null==this.accessToken||this.isCommitting||null==this.newComment||0===this.newComment.trim().length}}),methods:i()({},n.i(s.a)(["setAccessToken","setTokenUser"]),{renderMarkdown:function(){this.renderedMarkdown="Nothing to preview",this.newComment&&(this.renderedMarkdown=this.$marked(this.newComment)),this.isWrite=!1},fetchAccessToken:function(){var e=this,t=this.$queryParse();if(t.code){var n=t.code;delete t.code;var o=""+window.location.origin+window.location.pathname+this.$queryStringify(t)+window.location.hash;history.replaceState(null,null,o),this.$gitHubApi.getAccessToken(this,n).then(function(t){t.data&&t.data.access_token&&e.setAccessToken(t.data.access_token)})}},addComment:function(){var e=this;this.isCommitting=!0,this.$gitHubApi.addComment(this,this.commentsUrl,this.newComment.trim()).then(function(t){t.data&&t.data&&(e.$emit("addCommentSuccess",t.data),e.isWrite=!0,e.newComment=null,e.renderedMarkdown="",e.isCommitting=!1)}).catch(function(t){e.isCommitting=!1,t.response&&401===t.response.status&&e.setAccessToken(null)})}}),mounted:function(){var e=this;this.$nextTick(function(){e.fetchAccessToken()})}}},813:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{renderedMarkdown:""}},props:["comment"],methods:{renderMarkdown:function(){this.renderedMarkdown="",this.comment.body_html?this.renderedMarkdown=this.comment.body_html:this.comment.body&&(this.renderedMarkdown=this.$marked(this.comment.body))},openGitHub:function(){window.open(this.comment.user.html_url)}},mounted:function(){var e=this;this.$nextTick(function(){e.renderMarkdown()})}}},818:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(125),i=n.n(o),s=n(83),a=n(833),r=n.n(a),c=n(832),d=n.n(c);t.default={data:function(){return{issue:null,number:null,comments:[],newComment:null}},components:{Comment:r.a,AddComment:d.a},methods:i()({},n.i(s.a)(["updateActiveLabel"]),{setActiveLabel:function(e){this.updateActiveLabel(e),this.$router.push("/")},getComments:function(){var e=this;this.issue&&this.issue.comments>0&&this.$gitHubApi.getComments(this,this.issue.comments_url).then(function(t){e.comments=t.data})},getIssue:function(){var e=this;this.$gitHubApi.getIssue(this,this.number).then(function(t){e.issue=t.data,e.getComments()})},back:function(){this.$router.go(-1)},handleAddCommentSuccess:function(e){var t=this;this.comments.push(e),this.$nextTick(function(){setTimeout(function(){var e=t.$refs.commentContainer;e.scrollTop=e.scrollHeight-e.clientHeight},16)})}}),created:function(){this.$route.params.issue?this.issue=this.$route.params.issue:this.$route.params.number?this.number=this.$route.params.number:this.$router.replace("/")},mounted:function(){var e=this;this.$nextTick(function(){e.issue?e.getComments():e.getIssue()})}}},824:function(e,t,n){t=e.exports=n(799)(!1),t.push([e.i,".add-comment-container[data-v-6bb9d3b2]{display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;border-radius:4px;border:1px solid #eee;margin:30px 0}.add-comment-container .tab-container[data-v-6bb9d3b2]{padding:0 10px;border-bottom:1px solid #eee;background-color:#f9fafc;display:-ms-flexbox;display:flex}.add-comment-container .tab-container ul[data-v-6bb9d3b2]{margin-top:8px;list-style:none;display:-ms-flexbox;display:flex;-ms-flex-positive:1;flex-grow:1;margin-right:10px}.add-comment-container .tab-container li[data-v-6bb9d3b2]{padding:10px;font-size:14px;cursor:pointer;margin-bottom:-1px;color:#586069;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.add-comment-container .tab-container li.active[data-v-6bb9d3b2]{color:#24292e;background-color:#fff;border-top-left-radius:4px;border-top-right-radius:4px;border-top:1px solid #eee;border-left:1px solid #eee;border-right:1px solid #eee}.add-comment-container .tab-container div[data-v-6bb9d3b2]{-ms-flex-negative:0;flex-shrink:0;display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.add-comment-container .tab-container div a[data-v-6bb9d3b2]{color:#2196f3}.add-comment-container .tab-container div a[data-v-6bb9d3b2]:hover{text-decoration:underline}.add-comment-container textarea[data-v-6bb9d3b2]{margin:10px;border-radius:3px;padding:15px 30px 15px 15px;border:1px solid #eee;background-color:#fff;font-size:14px;color:#4b595f;outline:none}.add-comment-container textarea[data-v-6bb9d3b2]:disabled{cursor:not-allowed}.add-comment-container .markdown-body[data-v-6bb9d3b2]{margin:15px;min-height:107px}.add-comment-container .add-comment-btn[data-v-6bb9d3b2]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;margin:0 15px 15px 0;border-radius:4px;float:right;background-color:#34d058;color:#fff;-ms-flex-item-align:end;align-self:flex-end;padding:8px 12px;font-size:14px;font-weight:600;line-height:20px;white-space:nowrap;vertical-align:middle;user-select:none;border:none;outline:none}.add-comment-container .add-comment-btn[data-v-6bb9d3b2]:hover{background-color:#34c058}.add-comment-container .add-comment-btn[data-v-6bb9d3b2]:disabled{background-color:#94d3a2;cursor:not-allowed}.width-match-parent-btn[data-v-6bb9d3b2]{cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;margin:30px 0;height:50px;line-height:50px;text-align:center;border-radius:4px;font-size:16px;background-color:#eff7ff;color:#3593f2}.width-match-parent-btn[data-v-6bb9d3b2]:hover{background-color:#3593f2;color:#fff}",""])},828:function(e,t,n){var o=n(824);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(800)("07355fdd",o,!0,{})},830:function(e,t){e.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxMiIgdmlld0JveD0iMCAwIDE4IDEyIj4NCiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgICA8cGF0aCBkPSJNLTMtNmgyNHYyNEgtM3oiLz4NCiAgICAgICAgPHBhdGggZmlsbD0iIzRCNTk1RiIgZmlsbC1ydWxlPSJub256ZXJvIiBkPSJNMTggNUgzLjgzbDMuNTgtMy41OUw2IDAgMCA2bDYgNiAxLjQxLTEuNDFMMy44MyA3SDE4eiIvPg0KICAgIDwvZz4NCjwvc3ZnPg0K"},832:function(e,t,n){function o(e){n(828)}var i=n(82)(n(812),n(842),o,"data-v-6bb9d3b2",null);e.exports=i.exports},833:function(e,t,n){var o=n(82)(n(813),n(841),null,null,null);e.exports=o.exports},838:function(e,t,n){e.exports={render:function(){var e=this,t=e.$createElement,o=e._self._c||t;return e.issue?o("div",{staticClass:"blog-detail-container"},[o("div",{staticClass:"title-container"},[o("span",{staticClass:"title"},[e._v(e._s(e.issue.title))]),e._v(" "),o("ul",e._l(e.issue.labels,function(t){return o("li",{key:t.id,staticClass:"tag tag-small",style:{backgroundColor:"#"+t.color},on:{click:function(n){e.setActiveLabel(t)}}},[e._v(e._s(t.name)+"\n      ")])})),e._v(" "),o("span",{staticClass:"back",on:{click:e.back}},[o("img",{staticClass:"back-icon",attrs:{src:n(830)}}),e._v("返回\n    ")])]),e._v(" "),o("div",{ref:"commentContainer",staticClass:"comment-container bga-back-top"},[o("comment",{attrs:{comment:e.issue}}),e._v(" "),e._l(e.comments,function(e){return o("comment",{key:e.id,attrs:{comment:e}})}),e._v(" "),o("add-comment",{attrs:{commentsUrl:e.issue.comments_url},on:{addCommentSuccess:e.handleAddCommentSuccess}})],2)]):e._e()},staticRenderFns:[]}},841:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"comment"},[n("div",{staticClass:"comment-title"},[n("div",{on:{click:function(t){e.openGitHub()}}},[n("img",{attrs:{src:e.comment.user.avatar_url}}),e._v(" "),n("span",[e._v(e._s(e.comment.user.login))])]),e._v(" "),n("span",{staticClass:"time"},[e._v(e._s(e.$moment(e.comment.created_at).format("YYYY-MM-DD HH:mm")))])]),e._v(" "),n("article",{staticClass:"comment-body markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}})])},staticRenderFns:[]}},842:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"add-comment-container"},[n("div",{staticClass:"tab-container"},[n("ul",[n("li",{class:e.isWrite?"active":"",on:{click:function(t){e.isWrite=!0}}},[e._v("Write")]),e._v(" "),n("li",{class:e.isWrite?"":"active",on:{click:e.renderMarkdown}},[e._v("Preview")])]),e._v(" "),null==e.accessToken?n("div",[n("a",{attrs:{href:e.loginLink}},[e._v("Login")]),e._v(" with GitHub\n    ")]):e._e()]),e._v(" "),e.isWrite?n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.newComment,expression:"newComment"}],attrs:{disabled:null==e.accessToken,rows:"5",placeholder:"说点什么？「支持 MarkDown 语法」"},domProps:{value:e.newComment},on:{input:function(t){t.target.composing||(e.newComment=t.target.value)}}}):n("article",{staticClass:"markdown-body",domProps:{innerHTML:e._s(e.renderedMarkdown)}}),e._v(" "),n("button",{staticClass:"add-comment-btn",attrs:{disabled:e.commentBtnDisabled},on:{click:e.addComment}},[e._v("Comment\n  ")])])},staticRenderFns:[]}}});