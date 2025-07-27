chrome.contextMenus.create({
    id: "ai",
    title: "ai",
    contexts: ["selection"]
})

chrome .contextMenus.onClicked.addListener(function (info, tab) {
    if(info.menuItemId){
        //`${info.menuItemId} ${variableName}`
        const variableName = info.selectionText;
        chrome.tabs.create({ url: `https://www.google.com/search?q="${variableName}"%20%26+%28artificial+intelligence+use+cases+%7C%0D%0A%0D%0AAI+applications+%7C%0D%0A%0D%0Areal-world+AI+examples+%7C%0D%0A%0D%0Ahow+AI+is+used+today+%7C%0D%0A%0D%0AAI+implementation+models+%7C%0D%0A%0D%0AAI+in+healthcare+%7C%0D%0A%0D%0AAI+in+finance+%7C%0D%0A%0D%0Amachine+learning+use+cases+%7C%0D%0A%0D%0Adeep+learning+applications+%7C%0D%0A%0D%0AAI+deployment+strategies+%7C%0D%0A%0D%0Abusiness+use+of+AI+%7C%0D%0A%0D%0Apractical+examples+of+AI+in+everyday+life+%7C%0D%0A%0D%0Abest+AI+models+for+small+businesses+%7C%0D%0A%0D%0AAI+usage+models+in+cybersecurity+%7C%0D%0A%0D%0Ahow+to+implement+AI+in+your+organization+%7C+%0D%0A%0D%0Adifferent+types+of+AI+usage+models+%7C%0D%0A%0D%0Acomparison+of+AI+model+architectures%29` });
    }
});
