document.addEventListener('DOMContentLoaded', function() {
    // 侧边栏菜单项点击事件
    const menuItems = document.querySelectorAll('.nav-menu li:not(.category-header)');
    
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active类
            menuItems.forEach(i => i.classList.remove('active'));
            // 添加active类到当前点击的项
            this.classList.add('active');
        });
    });
    
    // 搜索功能
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    
    searchButton.addEventListener('click', function() {
        performSearch();
    });
    
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch();
        }
    });
    
    function performSearch() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        if (searchTerm) {
            // 简单的搜索实现 - 在实际应用中可以扩展
            const toolCards = document.querySelectorAll('.tool-card');
            let found = false;
            
            toolCards.forEach(card => {
                const toolName = card.querySelector('h3').textContent.toLowerCase();
                const toolDesc = card.querySelector('p').textContent.toLowerCase();
                
                if (toolName.includes(searchTerm) || toolDesc.includes(searchTerm)) {
                    card.style.border = '2px solid #1a73e8';
                    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
                    found = true;
                } else {
                    card.style.border = '1px solid #eee';
                }
            });
            
            if (!found) {
                alert('未找到匹配的工具，请尝试其他关键词');
            }
        }
    }
    
    // 工具卡片悬停效果增强
    const toolCards = document.querySelectorAll('.tool-card');
    
    toolCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
        
        // 点击工具卡片
        card.addEventListener('click', function() {
            const toolName = this.querySelector('h3').textContent;
            alert(`您选择了: ${toolName}\n即将跳转到工具详情页...`);
        });
    });
});