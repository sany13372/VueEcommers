import {ref} from "@vue/composition-api";
import useArrays from "@/helpers/useArrays";

export default function useWatchers(fields, defvals = null) {
  const {isObject, fill} = useArrays();
  const keys = Object.keys(fields);
  const defs = isObject(defvals)
    ? defvals : fill(keys, defvals)

  const watcher = (newv, oldv) =>
    keys.forEach(
      key => fields[key].value = newv[key] || defs[key] || null)
  return {
    watcher
  }
}
