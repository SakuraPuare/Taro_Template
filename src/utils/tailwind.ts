import { twMerge } from '@weapp-tailwindcss/merge'

/**
 * 条件性添加类名
 * @param {string} baseClasses - 基础类名
 * @param {Object} conditionalClasses - 条件类名对象，格式为 {[类名]: 布尔值}
 * @returns {string} - 合并后的类名字符串
 */
export const twClassNames = (baseClasses, conditionalClasses = {}) => {
  const allClasses = [baseClasses]
  
  Object.entries(conditionalClasses).forEach(([className, condition]) => {
    if (condition) {
      allClasses.push(className)
    }
  })
  
  return twMerge(...allClasses)
}

/**
 * 根据变体生成类名
 * @param {Object} variants - 变体配置对象
 * @param {string} currentVariant - 当前变体名称
 * @param {string} defaultClasses - 默认类名
 * @returns {string} - 合并后的类名字符串
 */
export const twVariant = (variants, currentVariant, defaultClasses = '') => {
  if (!variants || !currentVariant) return defaultClasses
  
  const variantClasses = variants[currentVariant] || ''
  return twMerge(defaultClasses, variantClasses)
}