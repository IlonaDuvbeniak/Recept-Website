<script>
    export async function getData() {
        const res = await fetch('./recipesData.json')
        if (!res.ok) throw new Error('Network error')
        return await res.json()  
    }
</script>