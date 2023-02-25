<template>
	<div>
		<VApp>
			<VMain>
				<Header class="header-container" />
				<slot />
			</VMain>
		</VApp>
	</div>
</template>

<style lang="scss" scoped>
.header-container {
  // flex-shrink: 1;
  // flex-grow: 0;
  position: fixed;
  width: 100%;
  padding: 0;
  margin: 0;
}
</style>
