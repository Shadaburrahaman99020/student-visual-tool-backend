-- Update placement eligibility based on new criteria (no backlogs and >= 50% aggregate)
UPDATE students 
SET placement_eligible = (active_backlogs = 0 AND aggregate_percentage >= 50)
WHERE true;
