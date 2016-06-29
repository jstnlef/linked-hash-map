var searchIndex = {};
searchIndex["linked_hash_map"] = {"doc":"A `HashMap` wrapper that holds key-value pairs in insertion order.","items":[[3,"LinkedHashMap","linked_hash_map","A linked hash map.",null,null],[3,"Iter","","An insertion-order iterator over a `LinkedHashMap`&#39;s entries, with immutable references to the\nvalues.",null,null],[3,"IterMut","","An insertion-order iterator over a `LinkedHashMap`&#39;s entries, with mutable references to the\nvalues.",null,null],[3,"IntoIter","","A consuming insertion-order iterator over a `LinkedHashMap`&#39;s entries.",null,null],[3,"Keys","","An insertion-order iterator over a `LinkedHashMap`&#39;s keys.",null,null],[3,"Values","","An insertion-order iterator over a `LinkedHashMap`&#39;s values.",null,null],[0,"serde","","An optional implementation of serialization/deserialization. Reference\nimplementations used:",null,null],[3,"LinkedHashMapVisitor","linked_hash_map::serde","`serde::de::Visitor` for a linked hash map.",null,null],[11,"serialize","linked_hash_map","",0,null],[11,"new","linked_hash_map::serde","Creates a new visitor for a linked hash map.",1,{"inputs":[],"output":{"name":"self"}}],[11,"visit_unit","","",1,null],[11,"visit_map","","",1,null],[11,"deserialize","linked_hash_map","",0,{"inputs":[{"name":"d"}],"output":{"name":"result"}}],[11,"new","","Creates a linked hash map.",0,{"inputs":[],"output":{"name":"self"}}],[11,"with_capacity","","Creates an empty linked hash map with the given initial capacity.",0,{"inputs":[{"name":"usize"}],"output":{"name":"self"}}],[11,"with_hash_state","","Creates an empty linked hash map with the given initial hash state.",0,{"inputs":[{"name":"s"}],"output":{"name":"self"}}],[11,"with_capacity_and_hash_state","","Creates an empty linked hash map with the given initial capacity and hash state.",0,{"inputs":[{"name":"usize"},{"name":"s"}],"output":{"name":"self"}}],[11,"reserve","","Reserves capacity for at least `additional` more elements to be inserted into the map. The\nmap may reserve more space to avoid frequent allocations.",0,null],[11,"shrink_to_fit","","Shrinks the capacity of the map as much as possible. It will drop down as much as possible\nwhile maintaining the internal rules and possibly leaving some space in accordance with the\nresize policy.",0,null],[11,"insert","","Inserts a key-value pair into the map. If the key already existed, the old value is\nreturned.",0,null],[11,"contains_key","","Checks if the map contains the given key.",0,null],[11,"get","","Returns the value corresponding to the key in the map.",0,null],[11,"get_mut","","Returns the mutable reference corresponding to the key in the map.",0,null],[11,"get_refresh","","Returns the value corresponding to the key in the map.",0,null],[11,"remove","","Removes and returns the value corresponding to the key from the map.",0,null],[11,"capacity","","Returns the maximum number of key-value pairs the map can hold without reallocating.",0,null],[11,"pop_front","","Removes the first entry.",0,null],[11,"front","","Gets the first entry.",0,null],[11,"pop_back","","Removes the last entry.",0,null],[11,"back","","Gets the last entry.",0,null],[11,"len","","Returns the number of key-value pairs in the map.",0,null],[11,"is_empty","","Returns whether the map is currently empty.",0,null],[11,"clear","","Clears the map of all key-value pairs.",0,null],[11,"iter","","Returns a double-ended iterator visiting all key-value pairs in order of insertion.\nIterator element type is `(&amp;&#39;a K, &amp;&#39;a V)`",0,null],[11,"iter_mut","","Returns a double-ended iterator visiting all key-value pairs in order of insertion.\nIterator element type is `(&amp;&#39;a K, &amp;&#39;a mut V)`\n# Examples\n```\nuse linked_hash_map::LinkedHashMap;",0,null],[11,"keys","","Returns a double-ended iterator visiting all key in order of insertion.",0,null],[11,"values","","Returns a double-ended iterator visiting all values in order of insertion.",0,null],[11,"index","","",0,null],[11,"index_mut","","",0,null],[11,"clone","","",0,null],[11,"default","","",0,{"inputs":[],"output":{"name":"self"}}],[11,"extend","","",0,null],[11,"extend","","",0,null],[11,"from_iter","","",0,{"inputs":[{"name":"i"}],"output":{"name":"self"}}],[11,"fmt","","Returns a string that lists the key-value pairs in insertion order.",0,null],[11,"eq","","",0,null],[11,"ne","","",0,null],[11,"partial_cmp","","",0,null],[11,"lt","","",0,null],[11,"le","","",0,null],[11,"ge","","",0,null],[11,"gt","","",0,null],[11,"cmp","","",0,null],[11,"hash","","",0,null],[11,"drop","","",0,null],[11,"clone","","",2,null],[11,"clone","","",3,null],[11,"next","","",2,null],[11,"size_hint","","",2,null],[11,"next","","",4,null],[11,"size_hint","","",4,null],[11,"next","","",3,null],[11,"size_hint","","",3,null],[11,"next_back","","",2,null],[11,"next_back","","",4,null],[11,"next_back","","",3,null],[11,"len","","",2,null],[11,"len","","",4,null],[11,"len","","",3,null],[11,"drop","","",3,null],[11,"clone","","",5,null],[11,"next","","",5,null],[11,"size_hint","","",5,null],[11,"next_back","","",5,null],[11,"len","","",5,null],[11,"clone","","",6,null],[11,"next","","",6,null],[11,"size_hint","","",6,null],[11,"next_back","","",6,null],[11,"len","","",6,null],[11,"into_iter","","",0,null]],"paths":[[3,"LinkedHashMap"],[3,"LinkedHashMapVisitor"],[3,"Iter"],[3,"IntoIter"],[3,"IterMut"],[3,"Keys"],[3,"Values"]]};
initSearch(searchIndex);
