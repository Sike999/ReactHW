import { useState, useCallback } from 'react'

export function useFilter(initialData) {
    const [originalData] = useState(() => structuredClone(initialData))
    const [filteredData, setFilteredData] = useState(initialData)
    const [filters, setFilters] = useState({})
    
    const applyFilters = useCallback((newFilters) => {
        const activeFilters = { ...filters, ...newFilters }
        setFilters(activeFilters)
        
        let result = structuredClone(originalData)

        const filterRules = {
            brand: (item, value) => value === 'All' || item.brand === value,
            minPrice: (item, value) => !value || item.price >= Number(value),
            maxPrice: (item, value) => !value || item.price <= Number(value),
        }

        Object.entries(activeFilters).forEach(([key, value]) => {
            if (filterRules[key] && value !== undefined && value !== '') {
                result = result.filter(item => filterRules[key](item, value))
            }
        })
        
        setFilteredData(result)
        return result
    }, [originalData, filters])
    
    const resetFilters = useCallback(() => {
        setFilters({})
        setFilteredData(structuredClone(originalData))
    }, [originalData])
    
    return {
        filteredData,
        filters,
        applyFilters,
        resetFilters,
        setFilteredData
    }
}