const org1_depts = [
  {
    name: "accounting",
    children: [
      { name: "accounting payable", children: [] },
      { name: "accounting receivable", children: [] }
    ]
  },
  {
    name: "finance",
    children: []
  }
];

const org2_depts = [
  {
    name: "accounting",
    children: [
      { name: "accounting payable", children: [] },
      {
        name: "accounting receivable",
        children: [
          { name: "cash", children: [] },
          { name: "check", children: [] }
        ]
      }
    ]
  },
  {
    name: "finance",
    children: [{ name: "investment", children: [] }]
  }
];

function PrintDepts(depts) {
    let result = "<ul>"
    for(const item of depts) {
        result += "<li>" + item.name + "</li>"
        result += PrintDepts(item.children)
    }
    result += "</ul>"
    return result
}

document.getElementById("org1").innerHTML = "<ul style=\"list-style: none\">" + PrintDepts(org1_depts).slice(4)
document.getElementById("org2").innerHTML = "<ul style=\"list-style: none\">" + PrintDepts(org2_depts).slice(4)