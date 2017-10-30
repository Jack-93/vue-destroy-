<template>
	<div id="index">
		<div id="main">
			<div class="leftnav">
				<router-link to="/">
					<el-button type="primary" plain @click="addTab($event)">					
						index					
					</el-button>
				</router-link>
				<router-link to="a">
					<el-button type="primary" plain @click="addTab($event)">					
						a组件					
					</el-button>
				</router-link>
				<router-link to="b">
					<el-button type="primary" plain @click="addTab($event)">					
						b组件				
					</el-button>
				</router-link>
			</div>
			<el-tabs v-model="editableTabsValue2" type="card" @tab-click="clicktab" closable @tab-remove="removeTab">
				<el-tab-pane v-for="(item, index) in editableTabs2" :router="item.content" :key="item.name" :label="item.title" :name="item.name">
				</el-tab-pane>
			</el-tabs>
			<keep-alive>
				<router-view>
				</router-view>
			</keep-alive>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				editableTabsValue2: "1",
				editableTabs2: [{
					title: "首页",
					name: "1",
					content: "index"
				}],
				tabIndex: 1
			};
		},
		methods: {
			addTab(event) {
				let that = this;
				var txt =event.target.innerText;

				let newTabName = ++this.tabIndex + '';
				  
				var cont =event.target.parentElement.parentElement.getAttribute("href");
            	cont = cont.substring(2, cont.length);
				
				var indexof = -1;
				for (var i = 0; i < this.editableTabs2.length; i++) {
					if (this.editableTabs2[i].title == txt) {
						indexof = this.editableTabs2[i].name;
					}
				}
				if (indexof == -1) {
					this.editableTabs2.push({
						title: txt,
						name: newTabName,
						content: cont
					});
					that.editableTabsValue2 = newTabName;
				} else {
					that.editableTabsValue2 = indexof;
				}
			},
			removeTab(targetName) {
				let tabs = this.editableTabs2;
				let activeName = this.editableTabsValue2;
				if (activeName === targetName) {
					tabs.forEach((tab, index) => {
						if (tab.name === targetName) {
							this.$children.map(item => {
								console.log(item.$el.className, tab.content);
								if (item.$el.className == tab.content) {
									item.$destroy();
								}
							});
							let nextTab = tabs[index + 1] || tabs[index - 1];
							if (nextTab) {
								activeName = nextTab.name;
								this.$router.push({
									name: nextTab.content
								});
							}
						}
					});
				}
				this.editableTabsValue2 = activeName;
				this.editableTabs2 = tabs.filter(tab => tab.name !== targetName);
			},
			clicktab(targetName) {
				var that = this;
				var router = targetName.$attrs.router;
				this.$router.push({
					name: router
				});
			}
		}
	};
</script>
