<template>
	<VContainer fluid class="fill-height">
		<VRow no-gutters align="start" justify="center" class="fill-height">
			<VCol cols="12" md="6" lg="5" sm="6">
				<VRow no-gutters align="center" justify="center">
					<VCol cols="12" md="6">
						<p>aquí va el home</p>
					</VCol>
				</VRow>
			</VCol>	
		</VRow>
	</VContainer>
</template>

<script setup>
	const email = ref("");
	const password = ref("");

	const { ruleEmail, rulePassLen, ruleRequired } = useFormRules();

	const submit = async () => {};
</script>
